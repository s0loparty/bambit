<template>
	<UiTable class="ralative">
		<UiTableHeader class="sticky top-0 bg-white dark:bg-dark-secondary">
			<UiTableRow
				v-for="headerGroup in table.getHeaderGroups()"
				:key="headerGroup.id"
			>
				<UiTableHead
					v-for="header in headerGroup.headers"
					:key="header.id"
				>
					<FlexRender
						v-if="!header.isPlaceholder"
						:render="header.column.columnDef.header"
						:props="header.getContext()"
					/>
				</UiTableHead>
			</UiTableRow>
		</UiTableHeader>
		<UiTableBody>
			<template v-if="table.getRowModel().rows?.length">
				<UiTableRow
					v-for="row in table.getRowModel().rows"
					:key="row.id"
					:data-state="row.getIsSelected() ? 'selected' : undefined"
				>
					<UiTableCell
						v-for="cell in row.getVisibleCells()"
						:key="cell.id"
					>
						<FlexRender
							:render="cell.column.columnDef.cell"
							:props="cell.getContext()"
						/>
					</UiTableCell>
				</UiTableRow>
			</template>
			<template v-else>
				<UiTableRow>
					<UiTableCell
						:colspan="columns.length"
						class="h-16 text-center"
					>
						Нет результатов
					</UiTableCell>
				</UiTableRow>
			</template>
			<template v-if="props.noMore">
				<UiTableRow>
					<UiTableCell
						:colspan="columns.length"
						class="h-16 text-center"
					>
						Данных больше нет ¯\_(ツ)_/¯
					</UiTableCell>
				</UiTableRow>
			</template>
			<div
				v-show="photoStore.photos.length"
				ref="moreFetchTriggerRef"
			></div>
		</UiTableBody>
	</UiTable>
</template>

<script setup lang="ts" generic="TData, TValue">
import { valueUpdater } from '@/lib/utils';
import { usePhotoStore } from '@/stores/photo';
import type { ColumnDef, SortingState } from '@tanstack/vue-table';
import { FlexRender, getCoreRowModel, getSortedRowModel, useVueTable } from '@tanstack/vue-table';
import { useElementVisibility } from '@vueuse/core';
import { ref, watch } from 'vue';

const photoStore = usePhotoStore();

const props = defineProps<{
	columns: ColumnDef<TData, TValue>[];
	data: TData[];
	noMore?: boolean;
}>();

const sorting = ref<SortingState>([]);

const table = useVueTable({
	get data() {
		return props.data;
	},
	get columns() {
		return props.columns;
	},
	getCoreRowModel: getCoreRowModel(),
	getSortedRowModel: getSortedRowModel(),
	onSortingChange: (updaterOrValue) => valueUpdater(updaterOrValue, sorting),
	state: {
		get sorting() {
			return sorting.value;
		},
	},
	enableSortingRemoval: false,
});

const moreFetchTriggerRef = ref<HTMLDivElement | null>(null);
const targetIsVisible = useElementVisibility(moreFetchTriggerRef);

watch(targetIsVisible, (isVisible) => {
	if (isVisible) {
		photoStore.fetchPhotosMore();
	}
});
</script>

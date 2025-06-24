<template>
	<section>
		<Transition
			name="fade"
			mode="out-in"
		>
			<TableSkeleton v-if="photoStore.pending" />
			<UiScrollArea
				v-else
				class="ui-table border dark:border-transparent bg-white rounded-md dark:bg-[#1A1A27]"
			>
				<PhotoTable
					v-model:data="photoStore.photos"
					:no-more="noMore"
					:columns
				/>
			</UiScrollArea>
		</Transition>
	</section>
</template>

<script setup lang="ts">
import { usePhotoStore } from '@/stores/photo';
import { computed } from 'vue';
import { columns } from './columns';
import PhotoTable from './PhotoTable.vue';
import TableSkeleton from './TableSkeleton.vue';

const photoStore = usePhotoStore();
const noMore = computed(() => photoStore.hasMore === false);

defineOptions({ name: 'AppTable' });
</script>

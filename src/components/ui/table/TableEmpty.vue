<script setup lang="ts">
import { cn } from '@/lib/utils';
import { reactiveOmit } from '@vueuse/core';
import type { HTMLAttributes } from 'vue';
import TableCell from './TableCell.vue';
import TableRow from './TableRow.vue';

const props = withDefaults(
	defineProps<{
		class?: HTMLAttributes['class'];
		colspan?: number;
	}>(),
	{
		colspan: 1,
	},
);

const delegatedProps = reactiveOmit(props, 'class');
</script>

<template>
	<TableRow>
		<TableCell
			:class="
				cn(
					'p-4 whitespace-nowrap align-middle text-sm text-slate-950 dark:text-slate-50',
					props.class,
				)
			"
			v-bind="delegatedProps"
		>
			<div class="flex items-center justify-center py-10">
				<slot />
			</div>
		</TableCell>
	</TableRow>
</template>

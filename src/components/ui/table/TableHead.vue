<script setup lang="ts">
import { cn } from '@/lib/utils';
import type { HTMLAttributes } from 'vue';

const props = defineProps<{
	class?: HTMLAttributes['class'];
}>();
</script>

<template>
	<th
		:class="
			cn(
				'h-10 px-2 text-left align-middle font-medium text-slate-500 [&:has([role=checkbox])]:pr-0 [&>[role=checkbox]]:translate-y-0.5 dark:text-slate-400',
				props.class,
			)
		"
	>
		<slot />
	</th>
</template>

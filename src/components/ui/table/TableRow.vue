<script setup lang="ts">
import { cn } from '@/lib/utils';
import type { HTMLAttributes } from 'vue';

const props = defineProps<{
	class?: HTMLAttributes['class'];
}>();
</script>

<template>
	<tr
		:class="
			cn(
				'border-b dark:border-b-dark-secondary dark:text-white/80 transition-colors hover:bg-slate-100/50 data-[state=selected]:bg-slate-100 dark:hover:bg-slate-800/50 dark:data-[state=selected]:bg-slate-800',
				props.class,
			)
		"
	>
		<slot />
	</tr>
</template>

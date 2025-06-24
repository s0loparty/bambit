<script setup lang="ts">
import { cn } from '@/lib/utils';
import type { HTMLAttributes } from 'vue';

interface SkeletonProps {
	class?: HTMLAttributes['class'];
}

const props = defineProps<SkeletonProps>();
</script>

<template>
	<div :class="cn('animate-pulse rounded-md bg-slate-900/10 dark:bg-slate-50/10', props.class)" />
</template>

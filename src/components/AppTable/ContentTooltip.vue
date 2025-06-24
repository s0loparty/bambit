<template>
	<UiTooltipProvider>
		<UiTooltip>
			<UiTooltipTrigger as="div">
				<div :class="['truncate', $attrs['class']]">
					{{ text }}
				</div>
			</UiTooltipTrigger>
			<UiTooltipContent>
				{{ text }}
			</UiTooltipContent>
		</UiTooltip>
	</UiTooltipProvider>
</template>

<script setup lang="ts">
defineProps<{ text: string }>();
defineOptions({ inheritAttrs: false });
</script>

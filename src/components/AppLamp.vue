<template>
	<div class="fixed top-0 right-5 z-50 -translate-x-1/2 flex flex-col items-center">
		<div class="h-16 w-0.5 bg-gray-400 dark:bg-gray-600"></div>

		<img
			src="/lamp.webp"
			alt="Lamp"
			class="w-16 transition-all duration-300 ease-in-out cursor-pointer rotate-180 relative left-px -top-2"
			:class="{
				'brightness-100 drop-shadow-[0_0_12px_#facc15]': !isDark,
				'brightness-50': isDark,
			}"
			@click="toggleMode"
		/>
	</div>
</template>

<script setup lang="ts">
import { useDark, useToggle } from '@vueuse/core';

const isDark = useDark();
const toggleDark = useToggle(isDark);

const toggleMode = () => toggleDark();
</script>

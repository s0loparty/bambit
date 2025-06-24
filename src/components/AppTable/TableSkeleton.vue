<template>
	<div class="space-y-5">
		<div
			v-for="num in 15"
			:key="num"
			class="flex gap-2"
		>
			<UiSkeleton class="h-5 w-[20%]" />
			<UiSkeleton class="h-5 w-[20%]" />
			<UiSkeleton class="h-5 w-[20%]" />
			<UiSkeleton class="h-5 w-[20%]" />
			<UiSkeleton class="h-5 w-[20%]" />
		</div>
	</div>
</template>

<template>
	<header class="py-4 sm:py-10">
		<form
			class="flex items-center gap-2"
			@submit.prevent="submit"
		>
			<div class="relative w-full">
				<UiInput
					v-model="inputQuery"
					ref="input"
					:disabled="photoStore.pending"
					placeholder="Поиск альбомов по ID"
					class="h-14 w-full text-lg md:text-xl"
				/>
				<button
					v-if="inputQuery.length"
					class="absolute end-3 inset-y-4 flex items-center justify-center"
					type="button"
					@click="clear"
				>
					<SearchX class="size-6 cursor-pointer dark:text-white text-black/80" />
				</button>
			</div>
			<UiButton
				:disabled="photoStore.pending"
				variant="brand"
				class="flex items-center justify-center h-14 w-14"
			>
				<LoaderCircle
					v-if="photoStore.pending"
					class="size-6 text-white animate-spin"
				/>

				<Search
					v-else
					class="size-6 text-white"
				/>
			</UiButton>
		</form>
		<p class="pl-1 pt-1 text-slate-800 text-sm dark:text-slate-500">
			Для поиска нескольких ID используйте разделитель в виде пробела, например: 1 2 3
		</p>
	</header>
</template>

<script setup lang="ts">
import { usePhoto } from '@/composables/usePhoto';
import { usePhotoStore } from '@/stores/photo';
import { LoaderCircle, Search, SearchX } from 'lucide-vue-next';
import { onMounted, ref, useTemplateRef } from 'vue';

const photoStore = usePhotoStore();
const { handleSubmitForm } = usePhoto();

const inputRef = useTemplateRef<HTMLInputElement>('input');
const inputQuery = ref(photoStore.searchIds.join(' '));

const submit = () => {
	handleSubmitForm(inputQuery.value);
};

const clear = () => {
	inputQuery.value = '';
};

onMounted(() => {
	inputRef.value?.focus();
});
</script>

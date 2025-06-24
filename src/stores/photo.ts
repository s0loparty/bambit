import { API_PATH, REQUEST_OFFSET } from '@/constants/photos';
import type { Photo } from '@/types/photo';
import { numbersToQuery } from '@/utils/request';
import { acceptHMRUpdate, defineStore } from 'pinia';
import { computed, ref } from 'vue';

const photoStore = () => {
	const allPhotos = ref<Photo[]>([]);
	const visiblePhotos = ref<Photo[]>([]);

	const searchIds = ref<number[]>([]);
	const currentPage = ref(1);

	const pending = ref(true);
	const hasMore = computed(() => visiblePhotos.value.length < allPhotos.value.length);

	const setSearchIds = (ids: number[]) => {
		searchIds.value = ids;
	};

	const resetPagination = () => {
		currentPage.value = 1;
		allPhotos.value = [];
		visiblePhotos.value = [];
	};

	const fetchPhotos = async () => {
		const REQUEST_URL = searchIds.value.length
			? `${API_PATH}?${numbersToQuery(searchIds.value)}`
			: API_PATH;

		pending.value = true;
		resetPagination();

		try {
			const response = await fetch(REQUEST_URL);
			const data: Photo[] = await response.json();

			allPhotos.value = data;

			updatePaginatedPhotos();
		} catch (error) {
			console.log('error', error);
		} finally {
			pending.value = false;
		}
	};

	const fetchPhotosMore = async () => {
		if (!hasMore.value) return;

		currentPage.value++;
		updatePaginatedPhotos();
	};

	const updatePaginatedPhotos = () => {
		const endIndex = currentPage.value * REQUEST_OFFSET;
		visiblePhotos.value = allPhotos.value.slice(0, endIndex);
	};

	return {
		allPhotos,
		photos: visiblePhotos,
		pending,
		currentPage,
		searchIds,
		hasMore,
		setSearchIds,
		fetchPhotos,
		fetchPhotosMore,
	};
};

export const usePhotoStore = defineStore('photoStore', photoStore, {
	persist: {
		pick: ['searchIds'],
	},
});

if (import.meta.hot) {
	import.meta.hot.accept(acceptHMRUpdate(usePhotoStore, import.meta.hot));
}

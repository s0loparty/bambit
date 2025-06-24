import { usePhotoStore } from '@/stores/photo';

export const usePhoto = () => {
	const albumsStore = usePhotoStore();

	const handleSubmitForm = async (query: string) => {
		const ids = query.split(' ').map(Number).filter(Boolean);
		albumsStore.setSearchIds(ids);
		await albumsStore.fetchPhotos();
	};

	return { handleSubmitForm };
};

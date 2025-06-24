<template>
	<div class="container">
		<div class="max-w-[600px] mx-auto">
			<AppHeader />
			<AppTable />
		</div>
	</div>

	<AppLamp />
</template>

<script setup lang="ts">
import { onMounted } from 'vue';
import AppLamp from './components/AppLamp.vue';
import { usePhotoStore } from './stores/photo';

const { fetchPhotos } = usePhotoStore();
onMounted(() => {
	// имитируем задержку
	setTimeout(fetchPhotos, 3000);
});
</script>

import { Button } from '@/components/ui/button';
import type { Photo } from '@/types/photo';
import type { ColumnDef } from '@tanstack/vue-table';
import { ArrowUpDown } from 'lucide-vue-next';
import { h } from 'vue';
import ContentTooltip from './ContentTooltip.vue';

export const columns: ColumnDef<Photo>[] = [
	{
		accessorKey: 'id',
		header: ({ column }) => {
			const isSorted = column.getIsSorted() === 'desc';

			return h(
				Button,
				{
					variant: isSorted ? 'brand' : 'ghost',
					size: 'xs',
					class: 'px-2',
					onClick: () => column.toggleSorting(column.getIsSorted() === 'asc'),
				},
				() => ['Ид', h(ArrowUpDown, { class: 'h-4 w-4' })],
			);
		},
		cell: ({ row }) => {
			return h('div', {}, row.getValue('id'));
		},
	},
	{
		accessorKey: 'albumId',
		header: ({ column }) => {
			const isSorted = column.getIsSorted() === 'desc';

			return h(
				Button,
				{
					variant: isSorted ? 'brand' : 'ghost',
					size: 'xs',
					class: 'px-2',
					onClick: () => column.toggleSorting(column.getIsSorted() === 'asc'),
				},
				() => ['Альбом', h(ArrowUpDown, { class: 'h-4 w-4' })],
			);
		},
		cell: ({ row }) => {
			return h('div', {}, row.getValue('albumId'));
		},
	},
	{
		accessorKey: 'title',
		header: ({ column }) => {
			const isSorted = column.getIsSorted() === 'desc';

			return h(
				Button,
				{
					variant: isSorted ? 'brand' : 'ghost',
					size: 'xs',
					class: 'px-2',
					onClick: () => column.toggleSorting(column.getIsSorted() === 'asc'),
				},
				() => ['Название', h(ArrowUpDown, { class: 'h-4 w-4' })],
			);
		},
		cell: ({ row }) => {
			return h(ContentTooltip, { text: row.original.title, class: 'max-w-[120px]' });
		},
	},
	{
		accessorKey: 'url',
		header: () => h('div', {}, 'Ссылка'),
		cell: ({ row }) => {
			return h(ContentTooltip, { text: row.original.url, class: 'max-w-[120px]' });
		},
	},
	{
		accessorKey: 'thumbnailUrl',
		header: () => h('div', {}, 'Миниатюра'),
		cell: ({ row }) => {
			return h(ContentTooltip, { text: row.original.thumbnailUrl, class: 'max-w-[120px]' });
		},
	},
];

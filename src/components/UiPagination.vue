<template>
	<nav aria-label="Pagination">
		<ul class="pagination">
			<li class="page-item" :class="[ hasPrevPage ? '' : 'disabled' ]">
				<a role="button" class="page-link" @click="goToPage(prevPage)">Previous</a>
			</li>
			
			<template v-for="page in model.total_pages">
				<li v-if="page == model.current_page" class="page-item active">
					<span class="page-link">
						{{ page }}
						<span class="sr-only">(current)</span>
					</span>
				</li>
				<li v-else class="page-item">
					<a role="button" class="page-link" @click="goToPage(page)">{{ page }}</a>
				</li>
			</template>

			<li class="page-item" :class="[ hasNextPage ? '' : 'disabled' ]">
				<a role="button" class="page-link" @click="goToPage(nextPage)">Next</a>
			</li>
		</ul>
	</nav>
</template>

<script>
	export default {
		props: {
			model: {
				type: Object,
				required: true
			}
		},
		computed: {
			hasPrevPage() {
				return this.model.prev === null ? false : true;
			},
			hasNextPage() {
				return this.model.next === null ? false : true;
			},
			prevPage() {
				return this.hasPrevPage ? this.model.current_page - 1 : false;
			},
			nextPage() {
				return this.hasNextPage ? this.model.current_page + 1 : false;
			}
		},
		methods: {
			goToPage(page) {
				this.$UIevents.fire('page-changed', page);
			}
		}
	}
</script>
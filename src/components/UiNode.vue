<template>
	<div class="list-group-item justify-content-between">
		<span role="button" @click="toggleNode(model.slug)" v-if="hasChildren(model)">
			<i class="fa fa-fw" :class="[open ? 'fa-chevron-down' : 'fa-chevron-right']"></i>
			{{ model.name }}
		</span>
		<span v-else>
			<i class="fa fa-chevron-right fa-fw"></i>
			{{ model.name }}
		</span>

		<div class="btn-group" role="group">
			<button type="button" class="btn btn-sm btn-outline-success" @click="editNode(model.id)"><i class="fa fa-pencil fa-fw"></i></button>
			<button type="button" class="btn btn-sm btn-outline-danger" @click="deleteNode(model.id)"><i class="fa fa-trash fa-fw"></i></button>
		</div>

		<div class="list-group mt-3" v-if="hasChildren(model)" v-show="open">
			<ui-node
				v-for="child in model.children"
				:reference="reference"
				:source="source"
				:model="child"
			>
			</ui-node>
		</div>
	</div>
</template>

<script>
	import axios from 'axios';

	export default {
		name: 'ui-node',
		data() {
			return {
				loaded: false,
				open: false
			}
		},
		props: {
			reference: {
				type: String,
				required: true
			},
			source: {
				type: String,
				required: true
			},
			model: {
				type: Object,
				default: () => {
					return {};
				}
			}
		},
		methods: {
			hasChildren(node) {
				return node.children && node.children.length > 0;
			},
			toggleNode(slug) {
				if (! this.loaded) {
					this.fetchSourceData(slug);
				}

				this.loaded = true;
				this.open = ! this.open;
			},
			fetchSourceData(slug) {
				if (! this.loaded) {
					axios.get(`${this.source}/${slug}`)
						.then((response) => {
							this.model.children = response.data.data;
						})
						.catch((response) => {
							console.log(response);
						});
				}
			},
			clickNode(value) {
				this.$events.fire('nodeClicked', { 'name': this.reference, 'value': value });
			},
			editNode(id) {
				console.log('TODO: editNode');
			},
			deleteNode(id) {
				console.log('TODO: deleteNode');
			}
		}
	}
</script>

<style>
	.list-group {
		width: 100%;
	}
</style>
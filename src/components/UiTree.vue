<template>
	<div>
		<h5>
			{{ title }}
			<span class="pull-right">
				<button type="button" class="btn btn-sm btn-outline-success" @click="createNode()" v-if="sourceCreate"><i class="fa fa-plus fa-fw"></i></button>
				<button type="button" class="btn btn-sm btn-outline-warning" @click="clearSelection()"><i class="fa fa-undo fa-fw"></i></button>
			</span>
		</h5>

		<div class="list-group pt-2">
			<ui-node
				v-for="node in model, key"
				:key="key"
				:reference="reference"
				:source="source + '/children'"
				:model="node"
			>
			</ui-node>
		</div>
	</div>
</template>

<script>
	import axios from 'axios';
	import UiNode from './UiNode';

	export default {
		data() {
			return {
				model: []
			}
		},
		props: {
			title: {
				type: String,
				default: ''
			},
			reference: {
				type: String,
				required: true
			},
			source: {
				type: String,
				required: true
			},
			sourceCreate: {
				type: String,
				default: ''
			}
		},
		components: {
			'ui-node': UiNode,
		},
		mounted() {
			this.fetchSourceData();
		},
		methods: {
			clearSelection() {
				this.$UIevents.fire('nodeClicked', { 'name': this.reference, 'value': '' });
			},
			fetchSourceData() {
				axios.get(`${this.source}`)
					.then((response) => {
						this.model = response.data.data;
					})
					.catch((response) => {
						console.log(response);
					});
			},
			createNode() {
				console.log('TODO: Create New Node!');
			}
		}
	}
</script>

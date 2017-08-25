<template>
	<div class="card">
		<div class="card-header bg-white">
			<div class="row">

				<div v-if="multiCheck" class="col-1">
					<button v-if="allChecked" type="button" class="btn btn-outline-primary" @click="uncheckAll"><i class="fa fa-check-square-o fa-fw"></i></button>
					<button v-else-if="someChecked" type="button" class="btn btn-outline-primary" @click="checkAll"><i class="fa fa-minus-square-o fa-fw"></i></button>
					<button v-else type="button" class="btn btn-outline-primary" @click="checkAll"><i class="fa fa-square-o fa-fw"></i></button>
				</div>
				<div v-else class="col-1">
					<button type="button" class="btn btn-outline-primary" @click="uncheckAll"><i class="fa fa-times fa-fw"></i></button>
				</div>

				<div class="col">
					<input type="text" id="option-builder-label" class="form-control" placeholder="Label" v-model="label" @keydown.enter.prevent="addOption" />
				</div>

				<div class="col">
					<input type="text" id="option-builder-value" class="form-control" placeholder="Value" v-model="value" @keydown.enter.prevent="addOption" />
				</div>

				<div class="col-3">
					<div class="btn-group btn-block" role="group">
						<button type="button" class="btn btn-block btn-success" @click.prevent="addOption"><i class="fa fa-plus fa-fw"></i> Add</button>
						<button type="button" class="btn btn-outline-secondary" @click.prevent="clearOption"><i class="fa fa-refresh fa-fw"></i> Clear</button>
					</div>
				</div>

			</div>
		</div>

		<div class="card-block" v-for="(option, index) in options">
			<div class="row">

				<div v-if="multiCheck" class="col-1">
					<div class="form-check">
						<label class="form-check-label">
							<input type="checkbox" class="form-check-input" @click="toggleOption(index, $event)" :name="'attributes[options][' + index + '][checked]'" :checked="option.checked" value="1" />
						</label>
					</div>
				</div>
				<div v-else class="col-1">
					<div class="form-check">
						<label class="form-check-label">
							<input type="radio" class="form-check-input" @click="toggleOption(index, $event)" :name="'attributes[options][' + index + '][checked]'" :checked="option.checked" value="1" />
						</label>
					</div>
				</div>

				<div class="col">
					<input type="text" class="form-control" :name="'attributes[options][' + index + '][label]'" v-model="option.label" />
				</div>

				<div class="col">
					<input type="text" class="form-control" :name="'attributes[options][' + index + '][value]'" v-model="option.value" />
				</div>

				<div class="col-3">
					<div class="btn-group" role="group">
						<button type="button" class="btn btn-outline-primary" @click.prevent="moveOptionDown(index)"><i class="fa fa-sort-down fa-fw"></i> Down</button>
						<button type="button" class="btn btn-outline-primary" @click.prevent="moveOptionUp(index)"><i class="fa fa-sort-up fa-fw"></i> Up</button>
						<button type="button" class="btn btn-danger" @click.prevent="removeOption(index)"><i class="fa fa-trash fa-fw"></i></button>
					</div>
				</div>

			</div>
		</div>
	</div>
</template>

<script>
	import _ from 'lodash';

	export default {
		name: 'ui-option-builder',
		
		data() {
			return {
				label: '',
				value: '',
				options: []
			}
		},

		props: {
			multiCheck: {
				type: Boolean,
				default: false
			},
			savedOptions: {
				type: Array,
				default: () => []
			}
		},

		computed: {
			allChecked() {
				return _.size(this.options) > 0 && _.every(this.options, [ 'checked', 1 ]);
			},
			someChecked() {
				return _.some(this.options, [ 'checked', 1 ]);
			},
			current: {
				get() {
					if (this.label || this.value) {
						return {
							label: (this.label != '' ? this.label : this.value),
							value: (this.value != '' ? this.value : this.label),
							checked: 0
						};
					}

					return false;
				},
				set(value) {
					this.label = value;
					this.value = value;
				}
			}
		},

		watch: {
			multiCheck: function(value) {
				if (!value) {
					this.uncheckAll();
				}
			}
		},

		methods: {
			toggleOption(index, ev) {
				if (!this.multiCheck) {
					this.uncheckAll();
				}

				let options = this.options;
				options[index].checked = (options[index].checked ? 0 : 1);

				this.options = _.toArray(Object.assign({}, this.options, options));
			},
			uncheckAll(ev) {
				let options = this.options;

				_.forEach(options, (value, key) => {
					options[key].checked = 0;
				});

				this.options = _.toArray(Object.assign({}, this.options, options));
			},
			checkAll(ev) {
				let options = this.options;

				_.forEach(options, (value, key) => {
					options[key].checked = 1;
				});

				this.options = _.toArray(Object.assign({}, this.options, options));
			},
			addOption(ev) {
				if (this.current) {
					document.getElementById('option-builder-label').focus();
					
					this.options.push(this.current);
					this.current = '';
				}
			},
			clearOption(ev) {
				this.current = '';
			},
			removeOption(index) {
				this.options.splice(index, 1);
			},
			moveOptionUp(index) {
				const from = index;
				const to = index - 1;

				this.options.splice(to, 0, this.options.splice(from, 1)[0]);
			},
			moveOptionDown(index) {
				const from = index;
				const to = index + 1;

				this.options.splice(to, 0, this.options.splice(from, 1)[0]);
			}
		},

		created() {
			_.forEach(this.savedOptions, (option, key) => {
				this.options.push({
					label: option.label,
					value: option.value,
					checked: (option.checked ? 1 : 0)
				});
			});
		}
	}
</script>

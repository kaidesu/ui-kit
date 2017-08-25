// Support
import UIEvents from './support/events.js';

// Directives
import vCollapse from './directives/collapse.js'
import vModal from './directives/modal.js';
import vSortable from './directives/sortable.js';

// Components 2.0
import Field from './components/field';
import Select from './components/select';

// Components
import UiAlert from './components/UiAlert.vue';
import UiBadge from './components/UiBadge.vue';
import UiCollapse from './components/UiCollapse.vue';
import UiDateTime from './components/UiDateTime.vue';
import UiDropdown from './components/UiDropdown.vue';
import UiDropzone from './components/UiDropzone.vue';
import UiGraph from './components/UiGraph.vue';
import UiGrid from './components/UiGrid.vue';
import UiInput from './components/UiInput.vue';
import UiListGroup from './components/UiListGroup.vue';
import UiListItem from './components/UiListItem.vue';
import UiMarkdown from './components/UiMarkdown.vue';
import UiModal from './components/UiModal.vue';
import UiOptionBuilder from './components/UiOptionBuilder.vue';
import UiPagination from './components/UiPagination.vue';
import UiProgress from './components/UiProgress.vue';
import UiProgressBar from './components/UiProgressBar.vue';
import UiSelect from './components/UiSelect.vue';
import UiSlug from './components/UiSlug.vue';
import UiTab from './components/UiTab.vue';
import UiTabs from './components/UiTabs.vue';
import UiToggle from './components/UiToggle.vue';
import UiTooltip from './components/UiTooltip.vue';
import UiTree from './components/UiTree.vue';
import UiWysiwyg from './components/UiWysiwyg.vue';

const UIKit = {
    Field,
    Select,
    
    UiAlert,
    UiBadge,
    UiCollapse,
    UiDateTime,
    UiDropdown,
    UiDropzone,
    UiGraph,
    UiGrid,
    UiInput,
    UiListGroup,
    UiListItem,
    UiMarkdown,
    UiModal,
    UiOptionBuilder,
    UiPagination,
    UiProgress,
    UiProgressBar,
    UiSlug,
    UiTab,
    UiTabs,
    UiToggle,
    UiTooltip,
    UiTree,
    UiWysiwyg
}

UIKit.install = (Vue) => {
    Vue.use(UIEvents);

    Vue.use(vCollapse);
    Vue.use(vModal);
    Vue.use(vSortable);
    
    for (const componentName in UIKit) {
        const component = UIKit[componentName]
        
        if (component && componentName !== 'install') {
            Vue.component(component.name, component)
        }
    }
}

// Automatically install UIKit if Vue is available globally
if (typeof window !== 'undefined' && window.Vue) {
    window.Vue.use(UIKit);
}

export default UIKit;

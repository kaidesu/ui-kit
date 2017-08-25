---
layout: default
title: Selects
description: Create a drop down list of options.
group: components
toc: true
---

### Example
{% example html %}
<form>    
    <ui-tabs>
        <ui-tab name="Vehicle">
            <ui-select name="ship" label="Ship" placeholder="Select a ship...">
                <option value="mercury">Dragon</option>
                <option value="venus">Orion</option>
                <option value="earth">Shuttle</option>
            </ui-select>
        </ui-tab>
        
        <ui-tab name="Location">
            <ui-select name="planets" label="Destination" placeholder="Select a planet...">
                <option value="mercury">Mercury</option>
                <option value="venus">Venus</option>
                <option value="earth">Earth</option>
                <option value="mars">Mars</option>
            </ui-select>
        </ui-tab>
    </ui-tabs>
    
    <button type="submit" class="btn btn-primary">Submit</button>
</form>
{% endexample %}

---
layout: default
title: Alerts
description: Provide contextual feedback messages for typical user actions with the handful of available and flexible alert messages.
group: components
toc: true
---

### Example
Alerts are available for any length of text, as well as an optional dismiss button. For proper styling, use one of the four contextual options.

{% example html %}
<ui-alert type="success">
    <strong>Well done!</strong> You successfully read this important alert message.
</ui-alert>

<ui-alert>
    <strong>Heads up!</strong> This alert needs your attention, but it's not super important.
</ui-alert>

<ui-alert type="warning">
    <strong>Warning!</strong> Better check yourself, you're not looking too good.
</ui-alert>

<ui-alert type="danger">
    <strong>Oh snap!</strong> Change a few things up and try submitting again.
</ui-alert>
{% endexample %}

import React from 'react';

import WIDGET_TYPES from './WidgetTypes';

export const MODES = {
  VIEW: 'VIEW',
};

const Widget = ({ widget, mode = MODES.VIEW, ...props }) => {
  const { WidgetComponent } = WIDGET_TYPES[widget.widget_type];

  return (
    <div>
      <WidgetComponent {...props} {...widget} mode={mode} />
    </div>
  );
};

export default Widget;

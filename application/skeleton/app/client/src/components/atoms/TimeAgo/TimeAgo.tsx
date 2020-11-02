import React, { FunctionComponent } from 'react';
import TimeAgo, { TimeAgoProps } from 'timeago-react';

// TS docgen (storybook) doesn't like the TimeAgo export, so wrapping it to fix
const WrappedTimeAgo: FunctionComponent<TimeAgoProps> = props => <TimeAgo {...props} />;

export default WrappedTimeAgo;

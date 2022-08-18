import React from 'react';
import { TeamsView } from '@twilio/flex-ui';
import { FlexPlugin } from '@twilio/flex-plugin';

import {
  extensionFilter,
  queueFilter,
  companyFilter,
  departmentFilter,
  teamFilter
} from './filters';

const PLUGIN_NAME = 'TeamViewFiltersPlugin';

export default class TeamViewFiltersPlugin extends FlexPlugin {
  constructor () {
    super(PLUGIN_NAME);
  }

  /**
   * This code is run when your plugin is being started
   * Use this to modify any UI components or attach to the actions framework
   *
   * @param flex { typeof import('@twilio/flex-ui') }
   * @param manager { import('@twilio/flex-ui').Manager }
   */
  init(flex, manager) {
    flex.TeamsView.defaultProps.filters = [
      TeamsView.activitiesFilter,
      // extensionFilter,
      queueFilter,
      // companyFilter,
      // departmentFilter,
      // teamFilter
    ]
  }
}

/*
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *     https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

/**
 * WordPress dependencies
 */
import { __ } from '@wordpress/i18n';

/**
 * External dependencies
 */
import PropTypes from 'prop-types';

/**
 * Internal dependencies
 */
import { FIELD_TYPES, DIRECTION } from '../../constants';
import { AnimationInputPropTypes } from '../types';

export const WhooshInEffectInputPropTypes = {
  whooshInDir: PropTypes.shape(AnimationInputPropTypes),
};

export default {
  whooshInDir: {
    label: __('Direction', 'web-stories'),
    type: FIELD_TYPES.DROPDOWN,
    values: [DIRECTION.LEFT_TO_RIGHT, DIRECTION.RIGHT_TO_LEFT],
    defaultValue: DIRECTION.LEFT_TO_RIGHT,
  },
};

/*
 * Copyright (C) 2021 - present Instructure, Inc.
 *
 * This file is part of Canvas.
 *
 * Canvas is free software: you can redistribute it and/or modify it under
 * the terms of the GNU Affero General Public License as published by the Free
 * Software Foundation, version 3 of the License.
 *
 * Canvas is distributed in the hope that it will be useful, but WITHOUT ANY
 * WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR
 * A PARTICULAR PURPOSE. See the GNU Affero General Public License for more
 * details.
 *
 * You should have received a copy of the GNU Affero General Public License along
 * with this program. If not, see <http://www.gnu.org/licenses/>.
 */

import {Flex} from '@instructure/ui-flex'
import Identicon from 'react-identicons'
import React from 'react'
import {string} from 'prop-types'
import {View} from '@instructure/ui-view'

export const AnonymousAvatar = ({seedString, ...props}) => {
  return (
    <View
      display="inline-block"
      textAlign="center"
      borderRadius="circle"
      borderWidth="medium"
      width="50px"
      height="50px"
      {...props}
    >
      <Flex width="100%" height="100%" alignItems="center" justifyItems="center">
        <Flex.Item>
          <Identicon string={seedString} size={30} />
        </Flex.Item>
      </Flex>
    </View>
  )
}

AnonymousAvatar.propTypes = {
  seedString: string
}

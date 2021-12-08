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

import React, {useState} from 'react'
import PropTypes from 'prop-types'
import I18n from 'i18n!OutcomeManagement'
import {Button, CloseButton} from '@instructure/ui-buttons'
import {ApplyTheme} from '@instructure/ui-themeable'
import {Heading} from '@instructure/ui-heading'
import {Popover} from '@instructure/ui-popover'
import {List} from '@instructure/ui-list'
import {View} from '@instructure/ui-view'
import {TruncateText} from '@instructure/ui-truncate-text'
import {outcomeShape} from './shapes'

const OutcomesPopover = ({outcomes, outcomeCount, onClearHandler}) => {
  const [showOutcomesList, setShowOutcomesList] = useState(false)
  const closeOutcomesList = () => {
    setShowOutcomesList(false)
  }
  const closeAndClear = () => {
    closeOutcomesList()
    onClearHandler()
  }

  const themeOverrides = {
    [Heading.theme]: {
      h5FontWeight: 700
    }
  }

  return (
    <ApplyTheme theme={themeOverrides}>
      <Popover
        on="click"
        placement="top center"
        screenReaderLabel={I18n.t('Outcomes Selected')}
        show={showOutcomesList}
        onToggle={setShowOutcomesList}
        shouldContainFocus
        shouldReturnFocus
        renderTrigger={
          <Button
            variant="link"
            size="medium"
            interaction={outcomeCount > 0 ? 'enabled' : 'disabled'}
          >
            {I18n.t(
              {
                one: '1 Outcome Selected',
                other: '%{count} Outcomes Selected'
              },
              {
                count: outcomeCount
              }
            )}
          </Button>
        }
      >
        <View padding="small" display="block" as="div">
          <CloseButton
            placement="end"
            offset="small"
            onClick={closeOutcomesList}
            screenReaderLabel={I18n.t('Close')}
          />
          <Heading margin="x-small none small none" level="h5">
            {I18n.t('Selected')}
          </Heading>
          <View
            as="div"
            display="block"
            width="260px"
            maxHeight="210px"
            maxWidth="260px"
            overflowY="auto"
            overflowX="hidden"
            tabIndex={outcomeCount > 10 ? '0' : '-1'}
          >
            <List isUnstyled size="small" margin="none small none none">
              {Object.values(outcomes)
                .sort((a, b) => a.title.localeCompare(b.title, ENV.LOCALE, {numeric: true}))
                .map(({linkId, title}) => (
                  <List.Item key={linkId}>
                    <TruncateText position="middle">{title}</TruncateText>
                  </List.Item>
                ))}
            </List>
          </View>
        </View>
        <View as="div" padding="small" borderWidth="small 0 0">
          <Button variant="link" size="medium" onClick={closeAndClear}>
            {I18n.t('Clear all')}
          </Button>
        </View>
      </Popover>
    </ApplyTheme>
  )
}

OutcomesPopover.propTypes = {
  outcomes: PropTypes.objectOf(outcomeShape).isRequired,
  outcomeCount: PropTypes.number.isRequired,
  onClearHandler: PropTypes.func.isRequired
}

export default OutcomesPopover

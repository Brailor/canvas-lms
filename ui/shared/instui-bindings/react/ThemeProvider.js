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

import React from 'react'
import {InstUISettingsProvider} from '@instructure/emotion'
import canvas from '@instructure/canvas-theme'
import highContrastTheme from '@instructure/canvas-high-contrast-theme'

function ThemeProvider({children}) {
  let transitionOverride = {}
  const brandvars = window.CANVAS_ACTIVE_BRAND_VARIABLES || {}
  if (process.env.NODE_ENV === 'test' || window.INST.environment === 'test') {
    transitionOverride = {
      transitions: {
        duration: '0ms'
      }
    }
  }

  const typography = {
    fontFamily: 'LatoWeb, "Lato Extended", Lato, "Helvetica Neue", Helvetica, Arial, sans-serif'
  }
  const canvasTheme = {...canvas, ...transitionOverride, ...brandvars, typography}
  const canvasHighContrastTheme = {...highContrastTheme, typography}

  const themeToUse = ENV.use_high_contrast ? canvasHighContrastTheme : canvasTheme
  return <InstUISettingsProvider theme={themeToUse}>{children}</InstUISettingsProvider>
}

export default ThemeProvider

/*
 * Copyright (C) 2020 - present Instructure, Inc.
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

import ready from '@instructure/ready'
import React from 'react'
import ReactDOM from 'react-dom'
import ThemeProvider from '@canvas/instui-bindings/react/ThemeProvider'
import AdminSplit from './react/index'

ready(() => {
  ReactDOM.render(
    <ThemeProvider>
      <AdminSplit
        user={ENV.ADMIN_SPLIT_USER}
        splitUrl={ENV.ADMIN_SPLIT_URL}
        splitUsers={ENV.ADMIN_SPLIT_USERS}
      />
    </ThemeProvider>,
    document.getElementById('admin_split')
  )
})

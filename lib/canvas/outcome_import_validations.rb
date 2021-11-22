# frozen_string_literal: true

#
# Copyright (C) 2018 - present Instructure, Inc.
#
# This file is part of Canvas.
#
# Canvas is free software: you can redistribute it and/or modify it under
# the terms of the GNU Affero General Public License as published by the Free
# Software Foundation, version 3 of the License.
#
# Canvas is distributed in the hope that it will be useful, but WITHOUT ANY
# WARRANTY; without even the implied warranty of MERCHANTABILITY or FITNESS FOR
# A PARTICULAR PURPOSE. See the GNU Affero General Public License for more
# details.
#
# You should have received a copy of the GNU Affero General Public License along
# with this program. If not, see <http://www.gnu.org/licenses/>.

require 'active_support/concern'

module Canvas::OutcomeImportValidations
  extend ActiveSupport::Concern

  included do
    validate :validate_latest_outcome_import

    def validate_latest_outcome_import
      return unless has_attribute?(:latest_outcome_import_id)

      if latest_outcome_import_id_changed? && latest_outcome_import && latest_outcome_import.context != self
        errors.add(t("latest_outcome_import context is not self"))
      end
    end
  end
end

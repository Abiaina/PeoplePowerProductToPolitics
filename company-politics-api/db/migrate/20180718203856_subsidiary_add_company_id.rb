class SubsidiaryAddCompanyId < ActiveRecord::Migration[5.2]
  def change
      add_reference :companies, :subsidiary, foriegn_key: true
  end
end

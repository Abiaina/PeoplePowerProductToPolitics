# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:

#make it ruby
f = open('company_data.json')
csv_f = csv.reader(f)

company_data_objects = []

company_data_objects.each |json| do
  name = [json :company_name]
  lobbying_dollars = [json :lobbying_dollars]
  contribution_dollars = [json :contribution_dollars]

  # hash with name and description keys
  most_lobbied_bill = [json :most_lobbied_bill]
  # array of hashes with name keys
  share_holders = [json :company_share_holders]


  company = Company.create([{ name: name }, { lobbying_dollars: lobbying_dollars }, {contribution_dollars: contribution_dollars}])

# check if these values are not nill or none
# check if these instances already exist

# these just check for if the instances already exist
  if !most_lobbied_bill.find_by(:name [json :most_lobbied_bill]) do
    company = MostLobbiedBill.create([{ name: name }, { description: [json :description }])
  end

  if !share_holders.find_by(:name share_holders) do
    company = MostLobbiedBill.create([{ name: name }])
  end

  if !top_recipients.find_by(:name top_recipients) do
    company = MostLobbiedBill.create([{ name: name }])
  end
end

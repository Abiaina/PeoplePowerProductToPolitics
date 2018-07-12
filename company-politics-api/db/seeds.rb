require 'json'

json_data = JSON.parse(File.read('./seed_data.json'))


json_data.each |json| do
  name = json["name"]
  lobbying_dollars = ["total_lobby_dollars"]
  contribution_dollars = json["total_contribution_dollars"]
  most_lobbied_bill = json["most_lobbied_bill"]
  share_holders = json["share_holder_politicians"]
  top_recipients = json["recipients"]
  os_id = json["os_id"]


  company = Company.create([{ name: name }, { lobbying_dollars: lobbying_dollars }, {contribution_dollars: contribution_dollars}, { os_id: os_id}])

# these just check for if the instances already exist
  if most_lobbied_bill.find_by(:name most_lobbied_bill) do
    company.most_lobbied_bill = most_lobbied_bill.find_by(:name most_lobbied_bill)
  else
    bill = MostLobbiedBill.create([{ name: most_lobbied_bill }, { description: ""})
    company.most_lobbied_bill = bill
  end

  share_holders.each |s_holder| do
    politician = share_holders.find_by(:name s_holder)

    if !politician do
      politician = share_holders.create([{ name: s_holder }])
    end

    company.share_holders = politician
  end

  top_recipients.each |t_recipient| do
    taker = top_recipients.find_by(:name t_recipient)

    if !taker do
      taker = share_holders.create([{ name: t_recipient }])
    end
    company.top_recipients = taker
  end
end

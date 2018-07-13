require 'json'

json_data = JSON.parse(File.read('db/seed_data.json'))

json_data.each do |json|
  name = json["name"]
  lobbying_dollars = json["total_lobby_dollars"]
  contribution_dollars = json["total_contribution_dollars"]
  most_lobbied_bill = json["most_lobbied_bill"]
  share_holders = json["share_holder_politicians"]
  top_recipients = json["recipients"]
  os_id = json["os_id"]

  bill = MostLobbiedBill.find_by name: most_lobbied_bill
  if !bill
    bill = MostLobbiedBill.create({ :name => most_lobbied_bill, :description => ""})
  end

  company = Company.create({ :name => name, :lobbying_dollars => lobbying_dollars, :contribution_dollars => contribution_dollars, :open_secret_id => os_id, :most_lobbied_bill_id => bill.id})


  share_holders.each do |s_holder|
    politician = ShareHolder.find_by name: s_holder
    if !politician
      politician = ShareHolder.create({ :name => s_holder })
    end
    company.share_holders << politician
  end

  top_recipients.each do |t_recipient|
    taker = TopRecipient.find_by name: t_recipient
    if !taker
      taker = TopRecipient.create({ :name => t_recipient })
    end
    company.top_recipients << taker
  end
end

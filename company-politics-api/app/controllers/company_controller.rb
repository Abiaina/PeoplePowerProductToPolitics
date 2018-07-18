class CompanyController < ApplicationController

# get request:
#http://localhost:3000/company_details/company name
# use '%20' for spaces

  def company_details
    company = Company.find_by name: params[:company]

    if company
      render json: {
        company_name: company.name,
        lobbying_dollars: company.lobbying_dollars,
        contribution_dollars: company.contribution_dollars,
        company_share_holders: company.share_holders,
        most_lobbied_bill: company.most_lobbied_bill,
        top_recipients: company.top_recipients,
      },
      status: :ok
    else
      render json: { errors: "no company matches your description"},
        status: :bad_request
    end
  end

  private
  def company_params
     params.require(:company).permit(:name, :id)
   end

end

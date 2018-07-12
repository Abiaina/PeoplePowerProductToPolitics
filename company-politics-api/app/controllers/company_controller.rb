class CompanyController < ApplicationController

  def show_details
    # or should I search it by its open_secret_id?
    company = Company.find_by(:name [company_params :name])
    if company
      render json: {
        company_name: company.name,
        lobbying_dollars: company.lobbying_dollars,
        contribution_dollars: company.contribution_dollars,
        company_share_holders: company.share_holders,
        # is this right?
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
    params.require(:company).permit(:company_name)
  end

end

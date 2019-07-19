class MatchChannel < ApplicationCable::Channel
  def subscribed
    stream_for(Match.find(params[:match_id]))
  end

  def unsubscribed
    # Any cleanup needed when channel is unsubscribed
  end
end

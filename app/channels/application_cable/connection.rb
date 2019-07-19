module ApplicationCable
  class Connection < ActionCable::Connection::Base
    identified_by :current_user

    def connect
      self.current_user = find_verified_user
    end
 
    private

      def find_verified_user
        current_user || reject_unauthorized_connection
      end

      def set_user
        @user = User.custom_find(params[:user_id])
        @user.presence || raise("No user, can't continue")
      end
    
      def current_user
        set_user
      end
  end
end

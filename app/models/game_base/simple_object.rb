module GameBase

  class SimpleObject
  
    # We base our properties/options/conditions index on 1, not 0 
    StartingPosition = 1;
  
    # This makes a class accessor.
    # Example:
    # Player.options
  
    class << self
      attr_accessor :options
    end

    # We use indiferent access to avoid stupid errors
    # Example:
    # Player.to_hash[:human] == Player.to_hash['human']
  
    def self.to_hash
      ActiveSupport::HashWithIndifferentAccess.new(
        Hash[self.options.collect.with_index do |item, index| 
          [item, index + 1]
        end]
      )
    end

    def self.as_json
      self.all
    end
  
    # The only class method that has to be called in SimpleObject subclasses,
    # array of symbols must be passed

    def self.conditions(*options)
    
    
    
      # Initialize the options accessor of the class
      self.options = options
    
      # Dynamically create a constant within class scope. Convienence reason.
      # Example: Player::All
      const_set("All", self.to_hash)
    
      # Dynamically create a method for the class. Convienence.
      # Example: Player.all == Player::All 
      define_singleton_method("all") do
        const_get("All")
      end
    
      # Dynamically create a method for class property accesss. As we are using SimpleObject.to_hash for access we benefit
      # from doing it 'String' or 'Symbol' way.
      # Example: Player["human"] = Player[:human] == Player.human == Player::Human
      define_singleton_method("[]") do |key|
        self.to_hash[key.to_sym]
      end
    
      # Dynamically create a regexp that would match one of the properties of the subclass of SimpleObject
      # Example: Player.to_regexp == /computer|human|opponent|nobody/
      define_singleton_method("to_regexp") do
        options.collect{|key, value| key }.flatten.compact.join("|")
      end
    
      # singleton_class.send(:alias_method, :conditions, :[])
    
      options.each_with_index do |option, index|
      
        # Dynamically created method for the option that returns the option
        # Example: Player.human == :human ; Player.opponent == :opponent
        define_singleton_method(option) do
          option
        end
      
        # Dynamically created method for the option that returns the option as string, not very usefull, still..
        # Example: Player.human_to_s == "human"; Player.opponent == :opponent
        define_singleton_method("#{option}_to_s") do
          option.to_s
        end
      
        # Dynamically create a method that returns position of the property, or the index 
      
        define_singleton_method("#{option}_to_i") do
          index + SimpleObject::StartingPosition
        end
      
        const_set(option.to_s.titleize, index + 1)

      end
    end
  
  end

end
module GameBase

  class Coordinate

    ZeroNine     = /[0-9][0-9]/
    LetterOneTen = /[a-zA-Z][0-9]/
    Letters      = {
      'a' => 1,
      'b' => 2,
      'c' => 3,
      'd' => 4,
      'e' => 5,
      'f' => 6,
      'g' => 7,
      'h' => 8,
      'i' => 9,
      'A' => 1,
      'B' => 2,
      'C' => 3,
      'D' => 4,
      'E' => 5,
      'F' => 6,
      'G' => 7,
      'H' => 8,
      'I' => 9
    }
    
    attr_accessor :x, :y
    
    def self.letter_of(number)
      Letters.key(number).upcase
    end
    
    def to_letter_number
      self.class.letter_of(self.x).to_s + self.y.to_s
    end
    
    def to_one_nine
      self.x.to_s + self.y.to_s
    end
    
    alias_method :to_s, :to_one_nine
    
    def initialize(*args)
      case args.length
      when 2
        @x, @y = args.collect(&:to_i)
        # raise "The x=#{@x} and y=#{@y}"
      when 1
        case object = args.first 
        when Square
          @x, @y = object.x, object.y
        when ZeroNine
          @x, @y = object.split("").collect(&:to_i)
        when LetterOneTen
          @x, @y = object.split("")
          @y = @y.to_i
          @x = self.class::Letters[@x]
        else raise "Unsupported coordinate format"
        end
      else raise "1 or 2 arguments allowed for 'Coordinate'!"
      end
    end

  end

end


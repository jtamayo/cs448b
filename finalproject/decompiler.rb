file = ARGV[0]
state = :start

current_word = ""

File.open(file).each do |line|
  line = line.rstrip
  case state
  when :start then
    current_word = line.strip
    state = :root
  when :root then
    if line == "Incoming:" then
      state = :incoming
    else
      raise "Unexpected: #{line}, state: #{state}"
    end
  when :incoming then
    if line == "Outgoing:" then
      state = :outgoing
    elsif line[0..0] == "\t"
      index = line.index(':')
      times = line[index..].to_i
      for i in (0..times-1) do
        print line[0..index-1], " ", current_word, "\n"
      end
    else
      raise "Unexpected: #{line}, state: #{state}"
    end
  when :outgoing then
    if line[0..0] == "\t"
      #just skip it
      ""
    else
      current_word = line.strip
      state = :root
    end
  end
end
  
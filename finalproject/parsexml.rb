require "rexml/document"
include REXML
file = File.new(ARGV[0])
doc = Document.new file
doc.elements.each("iwantyou/RawData") do |element|
  puts element.instance_methods
end
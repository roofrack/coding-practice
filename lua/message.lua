local message = "-- [ Default ] "
local len_message = string.len(message)
local line_symbol = "-"
local quantity_line_symbol = 60 - len_message
local show_the_line_symbols = string.rep(line_symbol, quantity_line_symbol)

-- print(len_message)
-- print(quantity_line_symbol)
print(message .. show_the_line_symbols)

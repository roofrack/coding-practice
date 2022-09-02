------------------------------------------------------------
-- Using vim.cmd which is an alias for vim.api.nvim_exec()
------------------------------------------------------------
-- This is for running vimscript inside a lua file
-- To run code in here you can use :so and the code will run in the
-- command line. Pretty cool.

-- There is also a vim.api.nvim_command() for running single commands.

--[some examples]--
vim.cmd('echo "hello there Robert"') -- I guess we dont need any brackets
vim.cmd("echo 54") -- need the quotes here or wont work
vim.cmd([[ echo 42 ]])
vim.cmd("ls") -- list buffers
vim.cmd('command! SayHello lua print("hello there Rob")')

-- Running lua code inside vimscript inside a lua file(a little weird but I am
-- just doing it for undderstanding how it all works together here.)
vim.cmd([[lua print("buppy")]]) -- need the lua keyword here

-- can do multiline kinda like a heredoc
vim.cmd([[        
  lua print("this is inside a multi-line command")
  lua print("and another line")
  ls
  echo "hey rob"
  pwd
  command! Hithere lua print('hey Robert')
]])

------------------------------------------------------------
-- Of course this is a lua file so can just run lua in here...
print("This is just lua in this lua file")
------------------------------------------------------------

-- Create a user command...
vim.api.nvim_create_user_command("Barney", "lua print(199)", {})

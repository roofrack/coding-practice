-- How to call a vim script function while in lua...

if vim.fn.has('nvim-0.7') == 1 then
  print('we have neovim 0.7')
end

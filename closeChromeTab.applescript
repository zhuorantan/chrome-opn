on run argv
  set theURL to item 1 of argv

  tell application "Chrome"
    repeat with theWindow in every window
      repeat with theTab in every tab of theWindow
        if (theTab's URL as string) contains theURL then
          set theTab to theTab as any
          delete theTab
        end
      end
    end
  end
end

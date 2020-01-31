+++
aliases = ["tools", "os x"]
title = "OS X Setup"
author = "Selleo"
+++

# OSX Setup

## Preparation

### App Store

* update system

* install command line tools & **Xcode** (cmd tools required in general, Xcode for js native packages)
```
xcode-select --install
```

### Homebrew

#### [install it](https://brew.sh/)
```
ruby -e "$(curl -fsSL https://raw.githubusercontent.com/Homebrew/install/master/install)"
```

#### repositories
```
declare -a taps=(
  'buo/cask-upgrade'
  'caskroom/cask'
  'caskroom/versions'
  'homebrew/bundle'
  'homebrew/core'
)

for tap in "${taps[@]}"; do
  brew tap "$tap"
done

brew upgrade && brew update
```

```
declare -a tools=(
  'git'
  'openssl'
  'libyaml'
  'coreutils'
  'automake'
  'autoconf'
  'readline'
  'libxslt'
  'libtool'
  'unixodbc'
  'gnupg'
  'tmux'
  'neovim'
  'watchman'
  'zsh'
  'zsh-completions'
  'zsh-autosuggestions'
  'zsh-syntax-highlighting'
  
  'heroku'
  'asdf'
  'yarn'
  'tldr'
  
  'postgres'
  'redis'
)

for tool in "${tools[@]}"; do
  brew install "$tool"
done
```

#### cask

```
brew install cask

declare -a cask_apps=(
  'alfred'
  'bartender'
  'docker'
  'dash'
  'google-chrome'
  'gpg-suite'
  'handbrake'
  'firefox'
  'firefox-developer-edition'
  'franz'
  'kitty'
  'jetbrains-toolbox'
  'keepingyouawake'
  'postman'
  'skype'
  'timing'
  'visual-studio-code'
  # 'spectacle'
  
  'adobe-creative-cloud'
  'capture-one'
  'spotify'
)

for app in "${cask_apps[@]}"; do
  brew cask install "$app"
done

```

#### oh my zsh

```
sh -c "$(curl -fsSL https://raw.github.com/robbyrussell/oh-my-zsh/master/tools/install.sh)"
```

edit `.zshrc` ensure plugins and extensions are loaded

```
# Load extensions
source /usr/local/share/zsh-autosuggestions/zsh-autosuggestions.zsh
source /usr/local/share/zsh-syntax-highlighting/zsh-syntax-highlighting.zsh

# Activate plugins
plugins=(git z rails ember-cli asdf zsh-completions)

. /usr/local/opt/asdf/asdf.sh

# See https://github.com/robbyrussell/oh-my-zsh/wiki/Themes
ZSH_THEME="robbyrussell"

# Set default editor
export EDITOR='vim'
```

#### asdf 

```
asdf plugin-add ruby
asdf install ruby 2.6.0
asdf global ruby 2.6.0
gem update --system 
gem install bundler 
bundle config --global jobs 3 

asdf plugin-add nodejs
asdf install nodejs 11.7.0
asdf global nodejs 11.7.0

```

#### MAS CLI - mac app store command line interface

```
brew install mas

# below a sample list of apps
declare -a mas_apps=(
  '918858936'   # Airmail 3 (3.6.43)
  '529456740'   # CheatSheet (1.0.3)
  '411643860'   # DaisyDisk (4.6.5)
  '422304217'   # Day One Classic (1.10.6)
  '668208984'   # GIPHY CAPTURE (4.1)
  '405399194'   # Kindle (1.23.3)
  '585829637'   # Todoist (7.1)
  '407963104'   # Pixelmator (3.7.5)
  '1289583905'  # Pixelmator Pro (1.1.5)
  '926036361'   # LastPass (4.1.0)
  '441258766'   # Magnet (2.4)
  '967805235'   # Paste (2.4.0)
  '424389933'   # Final Cut Pro (10.4.3)
  '434290957'   # Motion (5.4.1)
  '435330169'   # Shorter Oxford English Dictionary (3.5)
  '509818877'   # Type Fu (4.5.2)
  '470834073'   # Ticket to Ride (2.5.8)
  
)

for app in "${mas_apps[@]}"; do
  mas install "$app"
done

```

## Others


### Git Config

```
git config --global user.name "First Last"
git config --global user.email "your@mail.de"
```

### RubyMine - Open files in rubymine from terminal

iTerm preferences -> Profiles -> Advanced -> Semantic History

`/Applications/RubyMine.app/Contents/MacOS/rubymine \5 --line \2 \1`

Now you can click on paths in terminal with Cmd & click to open it in RubyMine.

### NTFS write support

* [fuse4x and ntfs-3g](https://gist.github.com/4153788)
* [osxfuse and ntfs-3g - worked for TB on 10.10](http://apple.stackexchange.com/a/180248)


#### Postgres.app

Instead of installing postgres via brew you can choose [Postgres.app](https://postgresapp.com/)
It allow you to quickly swap between different versions of Postgres and it is not so porblematic as "brew way".

##### Problem restarting postgresql database server

```
kill -HUP `cat /usr/local/var/postgres/postmaster.pid | head -1`
```

##### Issue with Adobe Package

File System should be case insensitive - otherwise Adobe tools would not work

##### VirtualBox

* [Install VirtualBox using brew](http://stackoverflow.com/a/23796568/478584)
* [Download image - i.e. IE11 - Win7](https://gist.github.com/magnetikonline/5274656#ie11---win7)

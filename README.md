# Frida-Scripts

## Installing Frida

- `pipx install frida-tools`
- [Get Frida Server](https://github.com/frida/frida/releases)
- `adb push <frida server> /data/local/tmp/frida-server`
- `adb shell`
- `su`
- `setenforce 0`
- `chmod 755 /data/local/tmp/frida/frida-server`
- `/data/local/tmp/frida-server &`

## To find processes running on the android
- `frida-ps -U`

## To inject script into a process
- `frida -U -p <processId> -l <javascript>`

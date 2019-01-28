IP="192.168.105.92"

if [ -n "$1" ]; then
  IP=$1 
fi

CMD_SCP="scp ./* robot@${IP}:~/"
echo $CMD_SCP
eval $CMD_SCP

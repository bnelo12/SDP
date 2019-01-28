IP="192.168.105.92"

if [ -n "$1" ]; then
  IP=$1 
fi

HOST="robot@${IP}"
CMD_SCP="scp ./* ${HOST}:~/"
echo $CMD_SCP
eval $CMD_SCP

ssh $HOST "python3 main.py"

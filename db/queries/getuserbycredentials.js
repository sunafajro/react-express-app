var querySelect = 'SELECT ';
var fromTable = 'FROM ';
var innerJoin = 'INNER JOIN ';
var where = 'WHERE ';
var limit = 'LIMIT ';

querySelect += '`ca`.`id` as id, ';
querySelect += '`ca`.`username` as username, ';
querySelect += '`ca`.`password` as password, ';
querySelect += '`ca`.`date` as date, ';
querySelect += '`s`.`name` as name, ';
querySelect += '`s`.`phone` as phone, ';
querySelect += '`s`.`email` as email ';

fromTable += '`tbl_client_access` `ca` ';

innerJoin += '`calc_studname` `s` ';
innerJoin += 'ON `s`.`id`=`ca`.`calc_studname` ';

where += '`ca`.`site`=:one AND ';
where += '`ca`.`username`=:login AND ';
where += '`ca`.`password`=:pass ';

limit += '1';

const GET_USER_BY_CREDENTIALS = querySelect + fromTable + innerJoin + where + limit;

module.exports = GET_USER_BY_CREDENTIALS;
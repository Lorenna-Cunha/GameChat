<?php
/**
 * As configurações básicas do WordPress
 *
 * O script de criação wp-config.php usa esse arquivo durante a instalação.
 * Você não precisa usar o site, você pode copiar este arquivo
 * para "wp-config.php" e preencher os valores.
 *
 * Este arquivo contém as seguintes configurações:
 *
 * * Configurações do banco de dados
 * * Chaves secretas
 * * Prefixo do banco de dados
 * * ABSPATH
 *
 * @link https://wordpress.org/support/article/editing-wp-config-php/
 *
 * @package WordPress
 */

// ** Configurações do banco de dados - Você pode pegar estas informações com o serviço de hospedagem ** //
/** O nome do banco de dados do WordPress */
define( 'DB_NAME', 'gamechat' );

/** Usuário do banco de dados MySQL */
define( 'DB_USER', 'root' );

/** Senha do banco de dados MySQL */
define( 'DB_PASSWORD', '' );

/** Nome do host do MySQL */
define( 'DB_HOST', 'localhost' );

/** Charset do banco de dados a ser usado na criação das tabelas. */
define( 'DB_CHARSET', 'utf8mb4' );

/** O tipo de Collate do banco de dados. Não altere isso se tiver dúvidas. */
define( 'DB_COLLATE', '' );

/**#@+
 * Chaves únicas de autenticação e salts.
 *
 * Altere cada chave para um frase única!
 * Você pode gerá-las
 * usando o {@link https://api.wordpress.org/secret-key/1.1/salt/ WordPress.org
 * secret-key service}
 * Você pode alterá-las a qualquer momento para invalidar quaisquer
 * cookies existentes. Isto irá forçar todos os
 * usuários a fazerem login novamente.
 *
 * @since 2.6.0
 */
define( 'AUTH_KEY',         't(:Ac6V]va<x~{AZ(_rbo#A]2^JR^nw{/J_EF!_sp?Br.{|GeUa8lYKXN+u`m:,F' );
define( 'SECURE_AUTH_KEY',  '>?,79AF?{aJDm9Gx0_%3S8B*B!S[[e5/RX||S#<[KGM,}^G_L@QG~;]sAt_Y5$[z' );
define( 'LOGGED_IN_KEY',    'qRCy58}]o1i}4 #lCR5K>ET2bc|Z(2+aL+-(gVg$yVKMMtK7PVJ;#)*dlzdD^hON' );
define( 'NONCE_KEY',        'M?VwR$;PepfL}T7_r m1k,Yh>{|J7t]xsT0<LDndX0jeq+_Ts%{(/TXoKW![Ln*{' );
define( 'AUTH_SALT',        '}-gDTXBsmh?vAzm;bq2>;jW5o*rvQUg}}s8O7kx,l&Su9o)*j2n:WP2l^~9LA;1*' );
define( 'SECURE_AUTH_SALT', 'ky1O-<2(=;JX _7d#lbl}J@gb~K3Z<-S7G{oGJdrg|TkXS,?slHw_cI-JPdJv4hv' );
define( 'LOGGED_IN_SALT',   '0BA^O9H-V5/$*Tn]ZDLWT_#5;5B}#U~|aATs9>M#>@7?%-S>/~jdYob-NkK!jC#.' );
define( 'NONCE_SALT',       ')`?D`7sjN-9fbKvQ|f@ w9w)Xs:`,^h)g-NmJHXzyQ=_H^CKXH+^2:0.|Y~ttX%F' );

/**#@-*/

/**
 * Prefixo da tabela do banco de dados do WordPress.
 *
 * Você pode ter várias instalações em um único banco de dados se você der
 * um prefixo único para cada um. Somente números, letras e sublinhados!
 */
$table_prefix = 'wp_';

/**
 * Para desenvolvedores: Modo de debug do WordPress.
 *
 * Altere isto para true para ativar a exibição de avisos
 * durante o desenvolvimento. É altamente recomendável que os
 * desenvolvedores de plugins e temas usem o WP_DEBUG
 * em seus ambientes de desenvolvimento.
 *
 * Para informações sobre outras constantes que podem ser utilizadas
 * para depuração, visite o Codex.
 *
 * @link https://wordpress.org/support/article/debugging-in-wordpress/
 */
define( 'WP_DEBUG', false );

/* Adicione valores personalizados entre esta linha até "Isto é tudo". */



/* Isto é tudo, pode parar de editar! :) */

/** Caminho absoluto para o diretório WordPress. */
if ( ! defined( 'ABSPATH' ) ) {
	define( 'ABSPATH', __DIR__ . '/' );
}

/** Configura as variáveis e arquivos do WordPress. */
require_once ABSPATH . 'wp-settings.php';

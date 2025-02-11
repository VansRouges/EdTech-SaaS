# to learn more about how to use Nix to configure your environment
# see: https://developers.google.com/idx/guides/customize-idx-env
{ pkgs, ...}: {
    channel = "stable-24.05";

    packages = [
        # pkgs.python3
        # pkgs.go
        pkgs.corepack
    ];
    #sets environment variables in the workspace
    env = {};
    services.docker.enable = true;

    idx.extensions = [
        # "vscode.vim"
    ];
    idx.previews = {

    };
}
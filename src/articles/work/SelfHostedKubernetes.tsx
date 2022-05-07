import React from 'react'
import { ArticleProps } from '../ArticleProps'

export const SelfHostedKubernetes = ({ className, close }: ArticleProps) => (
  <article
    id="self-hosted-kubernetes"
    className={className}
    style={{ display: 'none' }}
  >
    {/* <span className="image main" style={{margin: '0 0 1.5rem 0'}}>
            <img src={outerstellarCover} alt="" />
        </span> */}
    <h2 className="major">Self-Hosted Kubernetes</h2>
    <h3>Current State</h3>
    <p>
      This website, and all of the websites using the matteas.nz domain, are
      hosted out of my personal{' '}
      <a href="https://kubernetes.io/" target="_blank">
        Kubernetes
      </a>{' '}
      instance running on a physical server with 99% uptime. The server itself
      runs{' '}
      <a href="https://www.proxmox.com/en/" target="_blank">
        Proxmox
      </a>
      , with Kubernetes installed in a container. Each website is itself
      contained within an{' '}
      <a href="https://www.nginx.com/" target="_blank">
        Nginx
      </a>{' '}
      pod, with{' '}
      <a href="https://traefik.io/traefik/" target="_blank">
        Traefik
      </a>{' '}
      being used as the reverse-proxy.{' '}
      <a href="https://argoproj.github.io/cd/" target="_blank">
        ArgoCD
      </a>{' '}
      is used for syncing application manifests between Kubernetes and a private
      repository on Github, which means that it's easy to spin up new
      applications and rollback manifests when needed.
    </p>
    <h3>Future Goals</h3>
    <p>
      Moving forward, it would be great to introduce a proper CI/CD pipeline for
      the source code itself so that the deployment process could be improved.
      At the moment, it's a manual process to restart the containers so that
      they pull down the latest changes from the Github repos where the website
      code is published.
    </p>
    {close}
  </article>
)
